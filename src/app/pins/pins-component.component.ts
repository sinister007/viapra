import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  FileUploader
} from 'ng2-file-upload';

@Component({
  selector: 'app-pins-component',
  templateUrl: './pins-component.component.html',
  styleUrls: ['./pins-component.component.scss']
})
export class PinsComponentComponent implements OnInit {
  /**
   * output event
   */
  @Output() objPresentationEvent = new EventEmitter()

  /**
   * file reader for uplaod
   */
   uploader: FileUploader = new FileUploader({
    url: 'URL',
    disableMultipart: true
  });
  /**
   * array of customers or collaborators
   */
  arrCollaborators = []
  /**
   * file name to show the file
   */
  fileName = 'Base drop zone'

  /**
   * pins create form
   */
  objPinForm = this.objFormBuilder.group({
    strTitle: ['', Validators.required],
    strImages: ['',  Validators.required],
    strCollaborators: ['', Validators.required],
    strPrivacy: ['Public']
  })
  constructor(
    private objFormBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    const arrCollaborators = localStorage.getItem('arrCustomer') ?? '[]';
    this.arrCollaborators = JSON.parse(arrCollaborators)

  }

  /**
   * close popup
   */
  closePopUp() {
    this.objPresentationEvent.emit({
      strOperation:"CLOSE",
      objElement:''
    })
  }
  /**
   * file drag and drop
   */
  onFileSelected(event: any) {
    const files: File[] = event;
    for (let file of files) {
      if (file.type.startsWith('image/')) {
        this.convertToBase64(file);
      } else {
        console.error('Only image files are allowed');
      }
    }
  }

  /**
   * 
   * @param file convert to base64
   */
  private convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64String = e.target.result;
      this.fileName = file.name
      this.objPinForm.get('strImages') ?.setValue(base64String)
    };
    reader.readAsDataURL(file);
  }
  /**
   * create pin
   */
  createPin() {
    if (this.objPinForm.status === "INVALID") {
      return
    } else {
      this.objPresentationEvent.emit({
        strOperation: "SAVE_PIN",
        objElement: this.objPinForm.value
      })
    }

  }
}
